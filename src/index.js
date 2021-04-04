const FlameClient = require('./structures/FlameClient');
const { Intents, Structures, Client } = require('discord.js');

const clientOptions = { intents: Intents.ALL, allowedMentions: { parse: [] }};
const client = new FlameClient(clientOptions);

client._launch();