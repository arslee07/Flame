const FlameCommand = require('../../structures/FlameCommand');
const { getHelp } = require('../../utils/Functions');

class RemwarnCommand extends FlameCommand {
    constructor() {
        super('remwarn', {
            description: 'Удалить определенное предупреждение.',
            category: 'moderation',
            usage: 'remwarn <Случай>',
            aliases: ['unwarn', 'removewarn'],
            userPermissions: ['MANAGE_MESSAGES']
        })
    }
    async run(message, args) {
        const modcase = args[0];

        if (!modcase) return getHelp(message, this.name);
        if (isNaN(modcase) || !parseInt(modcase) || parseInt(modcase) <= 0) return message.reply('Укажите пожалуйста **верный** случай :no_entry:');

        const data = await message.client.database.collection('guilds').findOne({ guildID: message.guild.id });
        const warn = data?.warnings.find((r) => r.case == parseInt(modcase));

        if (!warn) return message.reply('Указанный вами случай не был найден в базе данного сервера :no_entry:');
        message.client.database.collection('guilds').updateOne({ guildID: message.guild.id }, {
            '$pull': {
                warnings: { case: parseInt(modcase) }
            }
        });

        return message.channel.send(`✅ Предупреждение \`#${modcase}\` было успешно удалено.`);
    }
}

module.exports = RemwarnCommand;