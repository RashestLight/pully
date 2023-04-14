


const { exec } = require('node:child_process')


exec('sudo apt install tree; sudo tree -f; find ', (err, output) => {
    if (err) {
        console.error("could not execute command: ", err)
        return
    }
    // log the output received from the command
    console.log("Output: \n", output)
})
