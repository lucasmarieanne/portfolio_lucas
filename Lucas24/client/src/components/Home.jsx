import React, { useState } from 'react';
import '../scss/home.css';
import '../scss/header.css';
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import image1 from '../images/react.png';
import image3 from '../images/meetic.png';

import icon1 from '../images/html-5.png';
import icon2 from '../images/css-3.png';
import icon3 from '../images/js.png';
import icon4 from '../images/php.png';
import icon5 from '../images/mysql.png';
import icon6 from '../images/react.png';

function Home () {
    // État pour stocker les données du formulaire
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Fonction pour gérer les changements de formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Envoie des données au serveur Node.js
        try {
            const response = await fetch('http://localhost:5001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            if (response.ok) {
                alert('Email envoyé avec succès!');
                // Remettre le formulaire à zéro après envoi
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Erreur lors de l\'envoi de l\'email.');
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert('Une erreur est survenue.');
        }
    };

    return (
        <div className="BIG">
            <div class="wrapper">
                <Navbar/>

                <section class="mainHome">
                    <div class="homeBox1">
                        <div class="homeContainer">
                            <h1>Bienvenue <i class="fa-solid fa-code"></i></h1>
                            <h2 class="homeBoxTitle">Sur Mon <span>Portfolio</span></h2>
                            <p>Apprendre à apprendre</p>

                            <div class="homeButton">
                                <a href="#aboutme" class="homeButtonStart">
                                    <div class="homeButtons">
                                        <div class="homeButtonText">Mon Parcours</div>
                                        <div class="homeButtonIcon">
                                            <i class="fa-solid fa-arrow-down"></i>
                                        </div>
                                    </div>
                                </a>
                                <a href="#projet" class="homeButtonProject">
                                    <div class="homeButtons">
                                        <div class="homeButtonText">Mes Projets</div>
                                        <div class="homeButtonIcon">
                                            <i class="fa-solid fa-briefcase"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="homeBox2">
                        <div class="blob"></div>
                    </div>
                </section>
            </div>

            <main>
                <section class="aboutMe" id="aboutme">
                    <div class="aboutContainer">
                        <div class="aboutContent">
                            <div class="aboutTitle">
                                <h1>À propos de <span>Moi</span></h1>
                            </div>

                            <h2>Salut</h2>
                            <h3>Moi c'est <span>Lucas</span>,</h3>
                            <h3>Je suis développeur web</h3>

                            <div class="aboutText">
                                <p>Passionné par l'informatique, et plus particulièrement par le développement web, j'ai décidé de suivre une formation de développeur web en alternance chez, <Link to="https://www.webacademie.org/" target="_blank">Web@cadémie by Epitech </Link>.</p>
                                <p>Vous voulez en apprendre plus sur moi ? <a href="#contact">Contactez-moi</a>.</p>
                            </div>

                            <a href="./apps/images/cvlucas.pdf" target="_blank" download="CV Lucas MARIE-ANNE.pdf" class="aboutCv">
                                <div class="aboutCvContainer">
                                    <div class="aboutCvText">Téléchargez mon cv</div>
                                    <i class="fa-solid fa-arrow-right"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

                <section class="projet" id="projet">
                    <div class="projetTitle">
                        <h1>Découvrez l'ensemble de mes projets</h1>
                        <p>Plusieurs de mes projets sont principalement réalisés en formation.</p>
                    </div>

                    <div class="projetContainer">
                        <Link to="https://github.com/lucasmarieanne/Chat-React" class="projetCard" target="_blank">
                            <figure>
                                <div class="projetCardImg">
                                    <img src={image1} />
                                </div>
                                <figcaption>
                                    <div class="projetCardTitle">Chat en React</div>
                                    <div class="projetCardText">Le projet "Chat en React" a pour objectif de créer une application de chat en temps réel permettant à deux utilisateurs de communiquer entre eux. L'application sera développée en utilisant la bibliothèque JavaScript React pour l'interface utilisateur et Node.js avec le module Socket.io pour gérer la communication en temps réel entre les utilisateurs.</div>
                                </figcaption>
                            </figure>
                        </Link>

                        <Link to="https://github.com/lucasmarieanne" class="projetCard" target="_blank">
                            <figure>
                                <div class="projetCardImg">
                                    <img src={image1} />
                                </div>
                                <figcaption>
                                    <div class="projetCardTitle">Snapchat React Native</div>
                                    <div class="projetCardText">Le projet "Snapchat React Native" a pour objectif de recréer l'application Snapchat en utilisant le framework React Native et l'application Expo Go. Cette application permettra aux utilisateurs de partager des photos et des vidéos, qui disparaîtront après un laps de temps défini par l'expéditeur. L'objectif est de fournir une expérience similaire à celle de Snapchat tout en utilisant les technologies React Native et Expo pour un développement rapide et efficace.</div>
                                </figcaption>
                            </figure>
                        </Link>

                        <Link to="https://github.com/lucasmarieanne" class="projetCard" target="_blank">
                            <figure>
                                <div class="projetCardImg">
                                    <img src={image3} />
                                </div>
                                <figcaption>
                                    <div class="projetCardTitle">Meetic</div>
                                    <div class="projetCardText">Le projet "Meetic" a pour objectif de créer un site de rencontres à la manière de Meetic. Le site permettra aux utilisateurs de s'inscrire, de se connecter et d'interagir avec d'autres membres en utilisant une base de données pour stocker les informations des utilisateurs. Le site mettra l'accent sur la gestion des erreurs pour les formulaires d'inscription et de connexion, garantissant ainsi une expérience utilisateur fluide et sécurisée.</div>
                                </figcaption>
                            </figure>
                        </Link>
                    </div>
                </section>

                <section class="services">
                    <div class="servicesTitle">
                        <h1>Mes services</h1>
                    </div>

                    <div class="servicesContainer">
                        <div class="serviceBox">
                            <div class="serviceBoxImg">
                                <img src={icon1} />
                            </div>
                        </div>
                        <div class="serviceBox">
                            <div class="serviceBoxImg">
                                <img src={icon2} />
                            </div>
                        </div>
                        <div class="serviceBox">
                            <div class="serviceBoxImg">
                                <img src={icon3} />
                            </div>
                        </div>
                        <div class="serviceBox">
                            <div class="serviceBoxImg">
                                <img src={icon4} />
                            </div>
                        </div>
                        <div class="serviceBox">
                            <div class="serviceBoxImg">
                                <img src={icon5} />
                            </div>
                        </div>
                        <div class="serviceBox">
                            <div class="serviceBoxImg">
                                <img src={icon6} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Formulaire dans le footer */}
            <footer>
                <h2>Contactez-moi</h2>
                <form onSubmit={handleSubmit}>

                    <div className="field">
                        <div className="fieldLabel">
                            <label>Nom <span>*</span></label>
                        </div>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Nom' required/>
                    </div>

                    <div className="field">
                        <div className="fieldLabel">
                            <label>E-mail <span>*</span></label>
                        </div>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='E-mail' required />
                    </div>

                    <div className="field">
                        <div className="fieldLabel">
                            <label>Message</label>
                        </div>
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder='Message' required ></textarea>
                    </div>

                    <button type="submit">Envoyer</button>

                </form>

            </footer>
                <div className="copy">
                    <p>© 2024, Lucas M.A</p>
                </div>
        </div>
    );
}

export default Home;
