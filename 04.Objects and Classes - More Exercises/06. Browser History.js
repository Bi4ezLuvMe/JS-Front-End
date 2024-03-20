function solve(browserInfo,browserLogs){
console.log(browserInfo['Browser Name']);
for (const log of browserLogs) {
    let cmd = log.split(' ');
    let website = log.slice(cmd[0].length+1,log.length);
 if(cmd[0] === 'Open'){
    browserInfo['Open Tabs'].push(website);
    browserInfo['Browser Logs'].push(log)
 }else if(cmd[0] === 'Close'){
    if( browserInfo['Open Tabs'].includes(website)){
        browserInfo['Open Tabs'].splice(browserInfo['Open Tabs'].indexOf(website),1);
        browserInfo['Recently Closed'].push(website);
        browserInfo['Browser Logs'].push(log);
    }
 }else if(cmd[0] === 'Clear'){
    browserInfo['Open Tabs'].splice(0,browserInfo['Open Tabs'].length);
    browserInfo['Recently Closed'].splice(0,browserInfo['Recently Closed'].length);
    browserInfo['Browser Logs'].splice(0,browserInfo['Browser Logs'].length);
 }
}
console.log(`Open Tabs: ${browserInfo['Open Tabs'].join(', ')}`);
console.log(`Recently Closed: ${browserInfo['Recently Closed'].join(', ')}`);
console.log(`Browser Logs: ${browserInfo['Browser Logs'].join(', ')}`);
}