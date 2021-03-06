exports.run = (client, message, args) => {
  const { channel } = message.member.voice;
  if (!channel)
    return message.channel.send(
      "Sajnálom, de zenelejátszáshoz egy hangcsatornában kell lennie!"
    );
  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue) return message.channel.send("Nics semmi lejátszás!");
  if (!args[0])
    return message.channel.send(
      `Zene hangereje: **${serverQueue.volume}**`
    );
  serverQueue.volume = args[0]; 
  serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
  return message.channel.send(`Zene hang erő átálítva: **${args[0]}**`);
};
