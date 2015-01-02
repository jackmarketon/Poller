var itemBid = {};

itemBid.user = 'Test User'; // (Optional) User for bid
itemBid.amount = '10'; // Hours for bid
itemBid.description = 'This is optional text for a bid'; // (Optional) Info, justification, etc.

var clientItem = {};

clientItem.type = 'Feature'; // Bug, Feature, Development, UX
clientItem.description = 'This is an item description';

clientItem.startBidding = ''; // Datetime of when to start bid
clientItem.lastBid = ''; // Datetime of last bid
clientItem.endBidding = ''; // Datetime of when to end bid

clientItem.bids = [itemBid]; // Array of bids
clientItem.keywords = ['keyword1', 'keyword2', 'keyword3']; // Refer to departments, employees, etc.

var clientModel = {};

clientModel.items = [clientItem];
clientModel.name = 'Example Client';

module.exports = clientModel;