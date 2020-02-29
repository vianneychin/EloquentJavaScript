/* Write a loop that will make seven calls of console.logs like so: */
/*
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/

let sharp = ""
for (let i = 1; i <= 7; i++) {
  sharp += "#"
  console.log(sharp)
}
