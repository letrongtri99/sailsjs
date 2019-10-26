module.exports = {
    sync: true,
    friendlyName: 'Random quote',
    description: 'Return a random quote.',
    fn: function (inputs, exits) {
      let quotes = sails.config.custom.quotes;
      return exits.success(quotes);
    }
  };