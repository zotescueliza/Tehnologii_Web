class Robot {
    constructor(name) {
        this.name = name

    }

    move() {
        console.log(`${this.name} is moving`)
    }

}

const r0 = new Robot('some robot')
r0.move()

class Weapon {
    constructor(description) {
        this.description = description
    }

    fire() {
        console.log(`${this.description} is firing`)
    }
}

const w0 = new Weapon('laser')
w0.fire()

class CombatRobot extends Robot {
    constructor(name) {
        super(name)
        this.weapons = []
    }

    addWeapons(w) {
        this.weapons.push(w)
    }

    fire() {
        console.log('firing all weapons')
        this.weapons.forEach(element => {
            element.fire()
        });
    }
}

const r1 = new CombatRobot('some combat robot')
r1.addWeapons(w0)
r1.move()
r1.fire()

Robot.prototype.fly = function () {
    console.log(`${this.name} is flying`)
}

r1.fly()

class Software {
    run() {
        console.log("Software is running");
    }
}
class Plugin {
    constructor(name) {
        this.name = name;
    }

    activate() {
        console.log(`Plugin "${this.name}" is activated`);
    }
}

class Browser extends Software {
    constructor(name) {
        super();            
        this.name = name;   
        this.plugins = [];  
    }

    installPlugin(plugin) {
        this.plugins.push(plugin);
        console.log(`Plugin "${plugin.name}" installed in ${this.name}`);
    }

    showPlugins() {
        if (this.plugins.length === 0) {
            console.log(`${this.name} has no plugins installed`);
        } else {
            console.log(`${this.name} has the following plugins:`);
            for (let p of this.plugins) {
                console.log(" - " + p.name);
            }
        }
    }

    run() {
        console.log(`${this.name} is starting...`);
        for (let p of this.plugins) {
            p.activate();
        }
        console.log(`${this.name} is now running`);
    }
}
const chrome = new Browser("Google Chrome");

const adblock = new Plugin("AdBlock");
const darkmode = new Plugin("Dark Mode");

chrome.installPlugin(adblock);
chrome.installPlugin(darkmode);
chrome.showPlugins();
chrome.run();
