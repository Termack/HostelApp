<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hostel App</title>
        <link rel="stylesheet" href="/style/header.css" />
        <link rel="stylesheet" href="/style/index.css" />
    </head>
    <body>
        <div class="header">
            <a id="header-title" href="/">Sparkling water</a>
            <div>
                <a href="/">Home</a>
                <a href="/customers">Customers</a>
                <a href="/login">Login</a>
            </div>
        </div>
        <div id="content">
            <div id="top">
                <div class="info left">
                    <h1 id="content-title">Sparkling Water Hostel</h1>
                    <p id="description">
                        The hostel Sparking Water is a fictitious hostel located
                        in Caxambu, state of Minas Gerais, Brazil.<br /><br />
                        Caxambu is a small town (its population in 2020 was
                        estimated at 22,000), renowed for its spa which has
                        twelve sources of sparkling mineral water flowing 24
                        hours a day and a cold-water geyser.<br /><br />
                        Caxambu is the only place in the world with 12 mineral
                        water springs, each with different chemical properties.
                    </p>
                </div>
                <div class="info right">
                    <h1>How to get to the hostel</h1>
                    <p class="dark-text">From Rio de Janeiro</p>
                    <p>
                        Via BR-116 (Presidente dutra) west past Resende-RJ to
                        the village of Engenheiro Passos-RJ and take BR-354
                        north.
                    </p>
                    <p class="dark-text">From Belo Horizonte or São Paulo</p>
                    <p>Via BR-381 to Campanha-MG, then west on BR-267.</p>
                    <h1>Famous tourism quotes</h1>
                    <p>
                        "Never go on trips with anyone you do not love." Ernest
                        Hemingway
                    </p>
                    <p>
                        "To travel is to discover that everyone is wrong about
                        other countries." Aldous Huxley
                    </p>
                </div>
            </div>
            <div id="park">
                <img src="/img/waterpark.jpg" alt="Caxambu water park" />
                <div>
                    <h1>The water park</h1>
                    <p>The water park is the main attraction in town.</p>
                    <p>Picture of the water park</p>
                </div>
            </div>
        </div>
        <div id="footer">
            <div>
                <p>
                    Sparkling water hostel, Sparkling Water main st. 1000.
                    Caxambu-MG. © 2020 Hostel Sparkling Water
                </p>
                <p>Change style:</p>
                <button>Flex + Grid</button>
                <button>Float</button>
                <button>Flex</button>
                <button>Grid</button>
            </div>
            <div class="abs">
                <p>
                    Sparkling water hostel, Sparkling Water main st. 1000.
                    Caxambu-MG. © 2020 Hostel Sparkling Water
                </p>
                <p>Change style:</p>
                <button class="changeStyle" value="">Flex + Grid</button>
                <button class="changeStyle" value="float/">Float</button>
                <button class="changeStyle" value="flex/">Flex</button>
                <button class="changeStyle" value="grid/">Grid</button>
            </div>
        </div>
        <script src="/js/changeStyle.js"></script>
    </body>
</html>
