exports.run = (client, message, args) => {
  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue) return message.channel.send("Nincs semmi lejátszás.");
  return message.channel.send(
    `🎶 Most játszódik: **${serverQueue.songs[0].title}**`
  );
};
