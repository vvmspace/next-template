import Layout from "../components/Layout";
import Head from 'next/head';
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React from "react";
import YandexShare from "react-yandex-share";

export default props => {
    return (<Layout>
        <Head>
            <title>Коронавирус в Москве 2020: отмена меропиятий</title>
            <meta name={'description'} content={'Предупреждение о вспышке пандемии Covid-19 в Москве'}/>
            <meta name={'keywords'} content={'коронавирус, коронавирусная инфекция, covid-19, самоизоляция, карантин'}/>
            <meta property={'og:image'} content={'https://concert.moscow/covid-19.png'} />
        </Head>
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <img src={'/covid-19.png'} style={{width: '100%', height: 'auto'}} title={'Коронавирус в Москве 2020: отмена мероприятий, карантин и самоизоляция'} /> <YandexShare/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Typography variant={'h3'} component={'h1'}>Коронавирус в Москве 2020</Typography>
                    <Typography variant={'body1'} component={'p'}>Ситуация развивается динамически. Разработка портала временно приостановлена. Сайт переведён в автономный режим. Мы не можем отслеживать весь новостной поток и проверять внешие источники. Информация может быть не актуальной.</Typography>
                    <Typography variant={'h4'} component={'h2'}>Отмена массовых мероприятий в Москве</Typography>
                    <Typography variant={'body1'} component={'p'}>В начале вспышки пандемии <strong>Covid-19</strong> в Москве были запрещены массовые мероприятия численностью более 5000 человек. Эти меры не показали достаточной эффективности.</Typography>
                    <Typography variant={'h4'} component={'h2'}>Карантин и комендантский час в Москве</Typography>
                    <Typography variant={'body1'} component={'p'}>Начиная с 30 марта 2020 года в Москве введёт жесткий карантин в виде обязательной самоизоляции и комендантский час. Сидите дома.</Typography>
                </Grid>
            </Grid>
        </Container>
    </Layout>);
}
