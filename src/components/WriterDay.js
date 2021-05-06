import React, { Component } from 'react'
import imageWriterDay from '../img/Kolas.jpg' // relative path to image 
import { Link } from 'react-router-dom'

export default class WriterDay extends Component {
    render() {
        return (
            <div class="container">
                <h1 class="jumbotron-heading">Деятель дня</h1>
                <p class="lead text-muted">Здесь вы кратко можете ознакомиться с деятелем дня</p>
                <div class="row">
                    <div class="col-sm">
                        <img alt="Якуб Колас" src={imageWriterDay} id="imgWriterDay" class="img-fluid"></img>
                    </div>
                    <div class="col-sm">
                        <p class="lead text-muted" id="description">
                            <strong>Имя:</strong> {this.props.name}
                            <br></br>
                            <strong>Годы жизни:</strong> {this.props.date}
                            <br></br>
                            <strong>Краткое описание:</strong> {this.props.description}
                        </p>
                        <a><Link to="/Kolas"><button type="button" class="btn btn-outline-secondary">Узнать подробнее</button></Link></a>
                    </div>
                </div>
            </div>
        );
    }
}