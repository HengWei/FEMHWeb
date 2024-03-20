/* eslint-disable react-hooks/rules-of-hooks */

import { Mailbox, ShareFill } from 'react-bootstrap-icons';

//import GoogleTranslate from './Translat'
import { useEffect } from 'react';
import './footer.css'
import { FacebookShareButton, FacebookIcon, LineShareButton, LineIcon } from 'react-share';


function FooterPage() {

    const today = new Date();
    const todayYear = today.getFullYear();

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
            pageLanguage: 'zh-TW'
            , includedLanguages: 'zh-TW,en,zh-CN,pt'
            , autoDisplay: true
            , multilanguagePage: true
        }, 'google_translate_element')
    }

    useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    })

    const urlPage = window.location.href

    console.log(urlPage);

    return (
        <div> TEST
        </div>
    );
}

export default FooterPage;