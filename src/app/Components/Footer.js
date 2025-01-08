'use client';
import Link from 'next/link'; 

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="section left">
                    <h4>Une question ?</h4>
                    <p><Link href="/about">voici notre FAQ</Link></p>
                    <p><a href="mailto:abder-bslh@outlook.fr">c’est ici pour nous contacter</a></p>

                </div>
                <div className="divider"></div>
                <div className="section right">
                    <h4>Autres liens utiles</h4>
                    <p>nos conditions générales</p>
                </div>
            </div>
            <div className="credits">
                © Efrei 2024<br />
                Abdou, Ryan, Manue
            </div>

            <style jsx>{`
                footer {
                    background-color: #f8f8f0;
                    font-family: Arial, sans-serif; 
                    color: #333;
                    padding: 20px;
                    border-top: 1px solid #ddd;
                    width: 100%;
                }

                .footer-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1200px;
                    margin: 0 auto;
                    flex-wrap: wrap;
                }

                .section {
                    flex: 1 1 45%;
                    text-align: center;
                    margin: 10px;
                }

                .section h4 {
                    margin-bottom: 10px;
                    font-size: 1.2em;
                    color: #49633a;
                }

                .section p {
                    margin: 5px 0;
                    line-height: 1.5;
                }

                .divider {
                    width: 1px;
                    height: auto;
                    background-color: black;
                    margin: 0 10px;
                    display: inline-block;
                }

                .credits {
                    text-align: center;
                    font-size: 0.9em;
                    color: #666;
                    margin-top: 20px;
                }

                @media (max-width: 768px) {
                    .footer-content {
                        flex-direction: column;
                        align-items: center;
                    }

                    .section {
                        flex: 1 1 100%;
                        text-align: center;
                    }

                    .divider {
                        display: none;
                    }

                    .credits {
                        margin-top: 10px;
                    }
                }

                @media (max-width: 480px) {
                    footer {
                        padding: 15px;
                    }

                    .section h4 {
                        font-size: 1.1em;
                    }

                    .credits {
                        font-size: 0.8em;
                    }
                }
            `}</style>
        </footer>
    );
}
