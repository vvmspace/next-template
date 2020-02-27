import Container from "@material-ui/core/Container";
import React from "react";
export default () => (<div style={{backgroundColor: '#448b00', paddingTop: 10, boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'}}><Container>
    {(typeof window !== 'undefined') && (<>
        <p>Powered by Vladimir V. Myagdeev (<a href={'mailto:concert.moscow@vvm.space'}>concert.moscow@vvm.space</a>), 2020</p>
    <p>Сайт запущен 23 февраля 2020 г. Отзывы, предложения, пожелания присылайте в Telegram: @vvmspace</p>
    <p><a href="//www.liveinternet.ru/click" target="_blank">
        <img
            src={`//counter.yadro.ru/hit?t14.15;r${(typeof window !== 'undefined')
            && (escape(document.referrer)+((typeof(screen)=='undefined')?'':
                ';s'+screen.width+'*'+screen.height+'*'+(screen.colorDepth?
                screen.colorDepth:screen.pixelDepth))+';u'+escape(document.URL)+
            ';h'+escape(document.title.substring(0,150))+';'+Math.random()) || ''}`}
            alt=""
            title="LiveInternet: показано число просмотров за 24 часа, посетителей за 24 часа и за сегодня"
            border="0" width="88" height="31" />
    </a></p>
    </>)}
</Container></div>);
