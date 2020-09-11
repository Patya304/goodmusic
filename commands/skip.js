exports.run = (client, message, args) => {
  const { channel } = message.member.voice;
  if (!channel)
    return message.channel.send(
      "Sajnálom, de zenelejátszáshoz egy hangcsatornában kell lennie!"
    );
  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue)
    return message.channel.send(
      "Nincs olyan zene, amit átugorhatnék neked."
    );
  serverQueue.connection.dispatcher.end("A skip parancsot használták!"
  );
};
