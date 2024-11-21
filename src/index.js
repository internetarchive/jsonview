import React  from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './i18n'; // Import i18n configuration
import 'react-tooltip/dist/react-tooltip.css'

import "bootstrap/dist/js/bootstrap.bundle.min";
import './custom.scss'; // includes bootstrap.scss

import './index.css';
import {UrlStatusCheckMethods} from "./constants/checkMethods";
import {IariSources} from "./constants/endpoints";
import {ArticleVersions} from "./constants/articleVersions";

const getEnvironment = () => {
    const REGEX_PRODUCTION_ENV = new RegExp(/^(?:(?:[\w-]+\.)+)?(?:[\w-]+\.)?archive\.org$/);  // if "(\.?)archive.org" at end of string
    const host = window.location.host
    if (REGEX_PRODUCTION_ENV.test(host)) return 'env-production'
    if (host === "internetarchive.github.io") return 'env-staging'
    if (host === "localhost:3000") return 'env-local'
    return "env-other"
}

const getIariSource = (qParams, targetEnvironment) => {
    // TODO: will change default to "iari" eventually, when that proxy is stable

    // hard-set to iari_prod for production
    if (targetEnvironment === 'env-production') return IariSources.iari_prod.key
    // else default to stage if not specified
    const sourceKey = queryParameters.has("iari-source") ? queryParameters.get("iari-source") : IariSources.iari_stage.key

    // if specified source not in our defined choices, default to stage, and error
    if (!IariSources[sourceKey]) {
        console.error(`IARI Source ${sourceKey} not supported.`)
        return IariSources.iari_stage.key
    }
    return sourceKey
}

const getMethod = (qParams, targetEnvironment) => {
    const temporaryDefaultKey = UrlStatusCheckMethods.WAYBACK.key  // hard-set to WAYBACK for production
    // const temporaryDefaultKey = UrlStatusCheckMethods.IABOT.key  // using IABot until LWC settles down

    if (targetEnvironment === 'env-production') return temporaryDefaultKey
    // else
    const methodKey = queryParameters.has("method") ? queryParameters.get("method") : temporaryDefaultKey

    // if specified method not in our defined choices, default to WAYBACK, and notify as error
    if (!UrlStatusCheckMethods[methodKey]) {
        console.error(`Method ${methodKey} not supported.`)
        return temporaryDefaultKey
    }
    return methodKey
}

/*
article version determines how the article data is interpreted.
 */
const getArticleVersion = (qParams, targetEnvironment) => {
    // const defaultArticleVersionKey = ArticleVersions.ARTICLE_V1.key
    const defaultArticleVersionKey = ArticleVersions.ARTICLE_XREF.key

    // ONLY allow default version for production
    if (targetEnvironment === 'env-production')
        return defaultArticleVersionKey

    // else respect query param setting
    const articleVersionKey = queryParameters.has("article_version")
        ? queryParameters.get("article_version")
        : defaultArticleVersionKey

    // return key if OK
    if (ArticleVersions[articleVersionKey]) return articleVersionKey

    // see if specified version key is in alternate keys of defined versions
    let altVersionKey
    Object.keys(ArticleVersions).some(versionKey => {
        const altKeys = ArticleVersions[versionKey].alternate_keys
        if (altKeys && altKeys.includes(articleVersionKey)) {
            altVersionKey = versionKey
            return true  // slip oyt of "some" loop
        } else {
            return false
        }
    })

    if (altVersionKey) return altVersionKey

    // slipping thru here means specified key is not a valid key or a
    // valid alternate key for article version; return default
    console.error(`Article Version ${articleVersionKey} not supported.`)
    return defaultArticleVersionKey

}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryParameters = new URLSearchParams(window.location.search)
const env = getEnvironment();
const myDebug = queryParameters.has("debug") ? queryParameters.get("debug").toLowerCase() === 'true' : false;
const myPath = queryParameters.has("url") ? queryParameters.get("url") : '';
const myCacheData = queryParameters.has("cache_data") ? queryParameters.get("cache_data") : '';
const myRefresh = queryParameters.has("refresh") ? queryParameters.get("refresh").toLowerCase() === 'true' : false;
const myIariSourceId = getIariSource(queryParameters, env);
const myMethod = getMethod(queryParameters, env);
const myArticleVersion = getArticleVersion(queryParameters, env);

root.render(<App env={env}
                 myPath={myPath}
                 myCacheData={myCacheData}
                 myRefresh={myRefresh}
                 myMethod={myMethod}
                 myArticleVersion={myArticleVersion}
                 myIariSourceId={myIariSourceId}
                 myDebug={myDebug}
/>);

