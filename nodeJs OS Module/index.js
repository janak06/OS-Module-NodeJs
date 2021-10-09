const os = require("os");

console.log("\n OS CPU architecture :- " + os.arch());

console.log(
  "\n Free memory of the system :- " + os.freemem() / (1024 * 1024 * 1024)
);

console.log(
  "\n Total memory of the system :- " + os.totalmem() / (1024 * 1024 * 1024)
);

console.log("\n OS Platform :-" + os.platform());

console.log("\n Information about the current user :-");

console.log(os.userInfo());
