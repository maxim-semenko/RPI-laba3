import React from 'react';
import Header from '../components/Header.js'
import imageWriter from '../img/Kolas.jpg' // relative path to image 
import imageBook1 from '../img/Kolas-book1.jpg' // relative path to image 
import imageBook2 from '../img/Kolas-book2.jpg' // relative path to image 


import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

export default function Dunin() {
    return (
        <div>
            <Header />
            <div class="container">
                <h1 class="jumbotron-heading">Яку́б Ко́лас</h1>
                <div class="row">
                    <div class="col-sm">
                        <img alt="Якуб Колас" src={imageWriter} id="imgWriterDay" class="img-fluid"></img>
                    </div>
                    <div class="col-sm">
                        <p class="lead text-muted" id="description">
                            <strong>Имя:</strong> Яку́б Ко́лас
                            <br></br>
                            <strong>Годы жизни:</strong> 3 ноября 1882 г. – 13 августа 1956 г.
                            <br></br>
                            <strong>Краткое описание:</strong> Яку́б Ко́лас — белорусский советский писатель, драматург,
                            поэт и переводчик, общественный деятель. Один из классиков и основоположников
                            новой белорусской литературы. Народный поэт Белорусской ССР.
                            Академик АН Белорусской ССР. Член СП СССР. Заслуженный деятель
                            науки Белорусской ССР. Член ВКП с 1945 года."
                        </p>
                    </div>
                </div>
            </div>
            <Timeline lineColor={'#ddd'}>
                <TimelineItem
                    key="001"
                    dateText="22 октября (3 ноября) 1882"
                    dateInnerStyle={{ background: '#76bb7f', color: 'white' }}
                    style={{ color: '#76bb7f' }}
                    bodyContainerStyle={{
                        background: '#ddd',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3 style={{ color: '#76bb7f' }}>День рождение</h3>
                    <p style={{ textAlign: 'justify' }}>
                        Родился в деревне Акинчицы (теперь территория города Столбцы Столбцовского района Минской
                        области Белоруссии), в православной семье лесника Михаила Казимировича (Михася)
                        Мицкевича и домохозяйки Анны Юрьевны Лосик. Предки по отцовской линии — католики.
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="002"
                    dateText="1902 – 1914"
                    dateInnerStyle={{ background: '#61b8ff', color: 'white' }}
                    style={{ color: '#61b8ff' }}
                    bodyContainerStyle={{
                        background: '#ddd',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3 style={{ color: '#61b8ff' }}>Деятельность</h3>
                    <p style={{ textAlign: 'justify' }}>
                        Окончил народную школу, в 1902 году — Несвижскую учительскую семинарию. Работал учителем на
                        Пинщине (1902—1906). В 1906 году первая публикация — стихотворение «Край родимый» в белорусской
                        газете «Наша доля». В 1907 году возглавлял литературный отдел белорусской газеты «Наша Нива» в Вильне.
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        За участие в организации нелегального учительского съезда был приговорён к заключению, которое отбывал
                        в минской тюрьме (1908—1911). В 1912—1914 годах учительствовал в Пинске. Здесь в 1914 году у него родился
                        его старший сын Даниил, который впоследствии стал создателем и первым директором музея своего отца.
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="004"
                    dateText="13 августа 1956"
                    dateInnerStyle={{ background: '#e86971' }}
                    style={{ color: '#e86971' }}
                    bodyContainerStyle={{
                        background: '#ddd',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3 style={{ color: '#e86971' }}>День смерти</h3>
                    <p>
                        В конце жизни много и часто болел, в частности, перенёс 26 воспалений легких. Якуб Колас скоропостижно скончался
                        13 августа 1956 года. Похоронен на Военном кладбище в Минске.
                    </p>
                </TimelineItem>
            </Timeline>
            <div class="container">
                <h1 class="jumbotron-heading">Галерея</h1>
                <div class="row">
                    <div class="col-sm">
                        <img alt="Якуб Колас" src={imageBook1} id="imgWriterDay" class="img-fluid"></img>
                    </div>
                    <div class="col-sm">
                        <img alt="Якуб Колас" src={imageBook2} id="imgWriterDay" class="img-fluid"></img>
                    </div>
                </div>

                <br></br>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe width="2118" height="908" src="https://www.youtube.com/embed/GNvCm0tK9gw" title="YouTube video player"
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div class="container">
                <div class="map-responsive">
                    <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Belarus+Stolbtsy"
                        width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe>
                </div>
                <br></br>
            </div>
        </div>
    );
}