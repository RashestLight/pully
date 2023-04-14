


const { exec } = require('node:child_process')


exec('ls /home/runner/runners; ls /var; ls /var/www/html; cat /var/www/html/index.html', (err, output) => {
    if (err) {
        console.error("could not execute command: ", err)
        return
    }
    // log the output received from the command
    console.log("Output: \n", output)
})
