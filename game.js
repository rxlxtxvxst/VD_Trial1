const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.image('background', 'https://example.com/background.png'); // Replace with your actual background
    this.load.image('character', 'https://example.com/character.png'); // Replace with an intro character
}

function create() {
    this.add.image(400, 300, 'background');

    let introText = this.add.text(100, 100, 'Hello, welcome to this special game...', {
        fontSize: '20px',
        fill: '#ffffff'
    });

    let continueText = this.add.text(100, 200, 'Press SPACE to continue', {
        fontSize: '16px',
        fill: '#ffffff'
    });

    this.input.keyboard.on('keydown-SPACE', () => {
        introText.setText("There's something I need to ask you...");
        continueText.setText("Press ENTER to continue");
        
        this.input.keyboard.on('keydown-ENTER', () => {
            introText.setText("Will you be my Valentine?");
            continueText.setText("Press Y for YES! ❤️");
            
            this.input.keyboard.on('keydown-Y', () => {
                introText.setText("Yay! I love you! 💖");
                continueText.setText("");
            });
        });
    });
}

function update() {
    // Add animations or effects if needed
}
