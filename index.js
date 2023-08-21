import express from 'express';
import bodyParser from 'body-parser';
import fs, { write } from 'node:fs';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.get("/", (req, res) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let array = processLineByLine(days[(new Date().getDay())]);
    let arrayCheck = processLineByLine(days[(new Date().getDay())] + "Check");
    res.render("index.ejs", {
        home: true,
        item: array,
        itemCheck: arrayCheck
    });
});

app.get("/mygoals", (req, res) => {
    let array = processLineByLine('mygoals');
    let arrayCheck = processLineByLine('mygoalsCheck'); 
    res.render("index.ejs", {
        day: 'mygoals',
        item: array,
        itemCheck: arrayCheck
    });
});

app.get("/sunday", (req, res) => {
    let array = processLineByLine('sunday');
    let arrayCheck = processLineByLine('sundayCheck');
    res.render("index.ejs", {
        day: 'sunday',
        item: array,
        itemCheck: arrayCheck
    });
});

app.get("/monday", (req, res) => {
    let array = processLineByLine('monday');
    let arrayCheck = processLineByLine('mondayCheck');
    res.render("index.ejs", {
        day: 'monday',
        item: array,
        itemCheck: arrayCheck
    });
});

app.get("/tuesday", (req, res) => {
    let array = processLineByLine('tuesday');
    let arrayCheck = processLineByLine('tuesdayCheck');
    res.render("index.ejs", {
        day: 'tuesday',
        item: array,
        itemCheck: arrayCheck
    });
});

app.get("/wednesday", (req, res) => {
    let array = processLineByLine('wednesday');
    let arrayCheck = processLineByLine('wednesdayCheck');
    res.render("index.ejs", {
        day: 'wednesday',
        item: array,
        itemCheck: arrayCheck
    });
});

app.get("/thursday", (req, res) => {
    let array = processLineByLine('thursday');
    let arrayCheck = processLineByLine('thursdayCheck');
    res.render("index.ejs", {
        day: 'thursday',
        item: array,
        itemCheck: arrayCheck
    });
});

app.get("/friday", (req, res) => {
    let array = processLineByLine('friday');
    let arrayCheck = processLineByLine('fridayCheck');
    res.render("index.ejs", {
        day: 'friday',
        item: array,
        itemCheck: arrayCheck
    });
});

app.get("/saturday", (req, res) => {
    let array = processLineByLine('saturday');
    let arrayCheck = processLineByLine('saturdayCheck');
    res.render("index.ejs", {
        day: 'saturday',
        item: array,
        itemCheck: arrayCheck
    });
});

app.get("/mygoalsScratch", (req, res) => {
    fs.writeFileSync('./data/mygoals.txt', '' ,'utf-8', (err) => {
        if (err) throw err;
    });
    fs.writeFileSync('./data/mygoalsCheck.txt', '' ,'utf-8', (err) => {
        if (err) throw err;
    });
    res.redirect('/mygoals')
});

app.get("/sundayScratch", (req, res) => {
    fs.writeFileSync('./data/sunday.txt', '' ,'utf-8', (err) => {
        if (err) throw err;
    });
    fs.writeFileSync('./data/sundayCheck.txt', '' ,'utf-8', (err) => {
        if (err) throw err;
    });
    res.redirect('/sunday')
});

app.get("/mondayScratch", (req, res) => {
    fs.writeFileSync('./data/monday.txt', '' ,'utf-8', (err) => {
        if (err) throw err;
    });
    fs.writeFileSync('./data/mondayCheck.txt', '' ,'utf-8', (err) => {
        if (err) throw err;
    });
    res.redirect('/monday')
});

app.get("/tuesdayScratch", (req, res) => {
    fs.writeFileSync('./data/tuesday.txt', '' ,'utf-8', (err) => {
        if (err) throw err;
    });
    fs.writeFileSync('./data/tuesdayCheck.txt', '' ,'utf-8', (err) => {
        if (err) throw err;
    });
    res.redirect('/tuesday')
});

app.get("/wednesdayScratch", (req, res) => {
    fs.writeFileSync('./data/wednesday.txt', '' ,'utf-8', (err) => {
        if (err) throw err;
    });
    fs.writeFileSync('./data/wednesdayCheck.txt', '' ,'utf-8', (err) => {
        if (err) throw err;
    });
    res.redirect('/wednesday')
});

app.get("/thursdayScratch", (req, res) => {
    fs.writeFileSync('./data/thursday.txt', '' ,'utf-8', (err) => {
        if (err) throw err;
    });
    fs.writeFileSync('./data/thursdayCheck.txt', '' ,'utf-8', (err) => {
        if (err) throw err;
    });
    res.redirect('/thursday')
});

app.get("/fridayScratch", (req, res) => {
    fs.writeFileSync('./data/friday.txt', '' ,'utf-8', (err) => {
        if (err) throw err;
    });
    fs.writeFileSync('./data/fridayCheck.txt', '' ,'utf-8', (err) => {
        if (err) throw err;
    });
    res.redirect('/friday')
});

app.get("/saturdayScratch", (req, res) => {
    fs.writeFileSync('./data/saturday.txt', '' ,'utf-8', (err) => {
        if (err) throw err;
    });
    fs.writeFileSync('./data/saturdayCheck.txt', '' ,'utf-8', (err) => {
        if (err) throw err;
    });
    res.redirect('/saturday')
});

app.post("/mygoals", (req, res) => {
    let sentence = req.body.newItem + "\n";
    fs.appendFileSync('./data/mygoals.txt', sentence ,'utf-8', (err) => {
        if (err) throw err;
    });
    let value = "false\n";
    fs.appendFileSync('./data/mygoalsCheck.txt', value ,'utf-8', (err) => {
        if (err) throw err;
    });
    res.redirect('/mygoals')
});

app.post("/sunday", (req, res) => {
    let sentence = req.body.newItem + "\n";
    fs.appendFileSync('./data/sunday.txt', sentence ,'utf-8', (err) => {
        if (err) throw err;
    });
    let value = "false\n";
    fs.appendFileSync('./data/sundayCheck.txt', value ,'utf-8', (err) => {
        if (err) throw err;
    });
    res.redirect('/sunday')
});

app.post("/monday", (req, res) => {
    let sentence = req.body.newItem + "\n";
    fs.appendFileSync('./data/monday.txt', sentence ,'utf-8', (err) => {
        if (err) throw err;
    });
    let value = "false\n";
    fs.appendFileSync('./data/mondayCheck.txt', value ,'utf-8', (err) => {
        if (err) throw err;
    });
    res.redirect('/monday')
});

app.post("/tuesday", (req, res) => {
    let sentence = req.body.newItem + "\n";
    fs.appendFileSync('./data/tuesday.txt', sentence ,'utf-8', (err) => {
        if (err) throw err;
    });
    let value = "false\n";
    fs.appendFileSync('./data/tuesdayCheck.txt', value ,'utf-8', (err) => {
        if (err) throw err;
    });
    res.redirect('/tuesday')
});

app.post("/wednesday", (req, res) => {
    let sentence = req.body.newItem + "\n";
    fs.appendFileSync('./data/wednesday.txt', sentence ,'utf-8', (err) => {
        if (err) throw err;
    });
    let value = "false\n";
    fs.appendFileSync('./data/wednesdayCheck.txt', value ,'utf-8', (err) => {
        if (err) throw err;
    });
    res.redirect('/wednesday')
});

app.post("/thursday", (req, res) => {
    let sentence = req.body.newItem + "\n";
    fs.appendFileSync('./data/thursday.txt', sentence ,'utf-8', (err) => {
        if (err) throw err;
    });
    let value = "false\n";
    fs.appendFileSync('./data/thursdayCheck.txt', value ,'utf-8', (err) => {
        if (err) throw err;
    });
    res.redirect('/thursday')
});

app.post("/friday", (req, res) => {
    let sentence = req.body.newItem + "\n";
    fs.appendFileSync('./data/friday.txt', sentence ,'utf-8', (err) => {
        if (err) throw err;
    });
    let value = "false\n";
    fs.appendFileSync('./data/fridayCheck.txt', value ,'utf-8', (err) => {
        if (err) throw err;
    });
    res.redirect('/friday')
});

app.post("/saturday", (req, res) => {
    let sentence = req.body.newItem + "\n";
    fs.appendFileSync('./data/saturday.txt', sentence ,'utf-8', (err) => {
        if (err) throw err;
    });
    let value = "false\n";
    fs.appendFileSync('./data/saturdayCheck.txt', value ,'utf-8', (err) => {
        if (err) throw err;
    });
    res.redirect('/saturday')
});

app.post("/checkCtrl", (req, res) => {
    const day = req.body.day.toLowerCase() + "Check";
    const value = req.body.value;
    const index = req.body.index;

    const array = processLineByLine(day);
    array[index] = value.toString();

    const content = array.join("\n");
    fs.writeFileSync(`./data/${day}.txt`, content ,'utf-8', (err) => {
        if (err) throw err;
    });
    res.redirect(`/${req.body.day.toLowerCase()}`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

function processLineByLine(day) {
    var array = fs.readFileSync(`./data/${day}.txt`).toString().split("\n");
    return array;
}

