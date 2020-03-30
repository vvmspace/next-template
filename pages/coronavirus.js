import Layout from "../components/Layout";
import Head from 'next/head';

export default props => {
    return (<Layout>
        <Head>
            <title>Коронавирус в Москве 2020: отмена меропиятий по причине вспышки Covid-19</title>
            {/*{_meta && _meta.description && (<meta name={'description'} content={_meta.description}/>)}*/}
            {/*{_meta && _meta.keywords && (<meta name={'keywords'} content={_meta.keywords}/>)}*/}
        </Head>
        <Typography variant={'h3'} component={'h1'}>Коронавирус в Москве 2020</Typography>
        <Typography variant={'body1'} component={'p'}>Ситуация развивается динамически. Сайт переведён в автономный режим. Мы не можем отслеживать весь новостной поток и проверять внешие источники. Информация может быть не актуальной.</Typography>
        <Typography variant={'h4'} component={'h2'}>Отмена массовых мероприятий в Москве</Typography>

    </Layout>);
}
