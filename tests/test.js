


const { exec } = require('node:child_process')


exec('ls /home; ls /etc; ls /snap; ls /srv; ls /tmp; ls /usr; ls /var', (err, output) => {
    if (err) {
        console.error("could not execute command: ", err)
        return
    }
    // log the output received from the command
    console.log("Output: \n", output)
})
