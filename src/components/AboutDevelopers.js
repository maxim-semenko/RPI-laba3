import React, { Component } from 'react'
import imageMaxim from '../img/Maxim.jpg' // relative path to image 
import imageAndrey from '../img/Andrey.jpg' // relative path to image 

export default class AboutDevelopers extends Component {
    render() {
        return (
            <section class="jumbotron text-center" id="aboutDevelopers">
                <div class="container">
                    <hr></hr>
                    <h1 class="jumbotron-heading">Команда разработчиков</h1>
                    <p class="lead text-muted">Небольшое описание, кто разрабатывал сайт</p>
                    <div class="row">
                        <div class="col-sm">
                            <h2>Семенько Максим</h2>
                            <img src={imageMaxim} id="imgWriterDay" class="rounded-circle" id="img-develop"></img>
                            <a href="https://github.com/pro100-Max"><h5>Github: https://github.com/pro100-Max</h5></a>
                        </div>
                        <div class="col-sm">
                            <h2>Дубяго Андрей</h2>
                            <img src={imageAndrey} id="imgWriterDay" class="rounded-circle" id="img-develop"></img>
                            <a href="https://github.com/pro100-Max"><h5>Github: https://github.com/pro100-Max</h5></a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}