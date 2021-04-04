const FlameListener = require('../structures/FlameListener');
const MuteManager = require('../managers/MuteManager');
const { MessageEmbed } = require("discord.js");

class CommandErrorListener extends FlameListener {
    constructor() {
        super('CommandErrorListener', {event: 'commandError'});
    }

    async run(error, command, message) {
        /**
         * Отправка сообщения об ошибке исполнения команды.
         */

        console.error(error);

        return message.channel.send(
            new MessageEmbed()
                .setTitle('Упс, что-то пошло не так…')
                .setDescription(`При выполнении команды ${command.name} возникла неизвестная ошибка. Попробуйте пожалуйста позже, или обратитесь на сервер поддержки.`)
                .setColor('#ff3333')
                .setFooter(this.message.guild.name, this.message.guild.iconURL())
                .setTimestamp()
        )
    }
}

module.exports = CommandErrorListener;