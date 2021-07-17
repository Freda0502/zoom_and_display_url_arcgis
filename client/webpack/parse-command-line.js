const { program } = require('commander');

exports.parseCommandLine = function(options = {}){
  if (program.options.length == 0) {
    program.storeOptionsAsProperties(true);
  }
  const defaultAcceptedCommand = program.version('1.2.0').allowUnknownOption()
    .option('--path <path>', 'Mount path')
    .option('-p, --portal', 'embed in portal')
    .option('-d, --dev_edition', 'developer edition')
    .option('-b, --buildNumber <buildNumber>', 'build number')
    .option('-a, --jsApiUrl <jsApiUrl>', 'arcgis js api url');

  (options.additionalArgs || []).reduce((command, arg = []) => {
    const [methodName, ...methodArgs] = arg;
    return arg.length < 2 ? command : command[methodName](...methodArgs);
  }, defaultAcceptedCommand).parse(process.argv);

  return program;
}
