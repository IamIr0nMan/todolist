
exports.getDate =  function(){
  const today = new Date();
  const options = {
    weekday:"long",
    day:"numeric",
    month:"long",
    // year:"numeric/2-digit --in all",
    // hour:"numeric",
    // minute:"numeric",
    // second:"numeric"
  };

  return today.toLocaleDateString("en-US",options);
}

exports.getDay = function(){
  const today = new Date();

  const options = {
    weekday:"long",
    // day:"numeric",
    // month:"long",
    // year:"numeric/2-digit --in all",
    // hour:"numeric",
    // minute:"numeric",
    // second:"numeric"
  };

  return today.toLocaleDateString("en-US",options);
};
