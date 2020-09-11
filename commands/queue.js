exports.run = (client, message, args) => {
  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue) return message.channel.send("Nincs semmi lejátszás.");
  return message.channel.send(`
__**Zene lista:**__

${serverQueue.songs.map((song) => `**-** ${song.title}`).join("\n")}

**Most játszott:** ${serverQueue.songs[0].title}
		`);
};
