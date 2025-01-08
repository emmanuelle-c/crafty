'use client';

export default function Footer() {
    return (
        <footer>
            <div className="section">
                <h4>Une question ?</h4>
                <p>voici notre FAQ</p>
                <p>c’est ici pour nous contacter</p>
            </div>
            <div className="divider"></div>
            <div className="section">
                <h4>Autres liens utiles</h4>
                <p>nos conditions généraales</p>
            </div>
            <div className="credits">
                copyright © Efrei 2024<br />
                Abdou, Ryan, Manue
            </div>

            <style jsx>{`
                footer {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background-color: #f8f8f0;
                    color: #333;
                    padding: 20px;
                    border-top: 1px solid #ddd;
                    gap: 20px;
                }

                .section {
                    width: 100%;
                    max-width: 600px;
                    text-align: center;
                }

                .section h4 {
                    margin: 0;
                    font-size: 1.2em;
                    color: #49633a;
                }

                .section p {
                    margin: 5px 0;
                }

                .divider {
                    display: none;
                }

                .credits {
                    text-align: center;
                    font-size: 0.9em;
                    color: #666;
                }

                @media (min-width: 768px) {
                    footer {
                        flex-direction: row;
                        justify-content: space-between;
                        flex-wrap: wrap;
                    }

                    .section {
                        width: 45%;
                        text-align: left;
                    }

                    .divider {
                        display: block;
                        width: 1px;
                        height: 50px;
                        background-color: #ccc;
                    }

                    .credits {
                        width: 100%;
                        text-align: center;
                        margin-top: 20px;
                    }
                }
            `}</style>
        </footer>
    );
}
