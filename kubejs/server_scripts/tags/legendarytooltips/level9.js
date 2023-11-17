ServerEvents.tags('item', e => {
    e.add('legendarytooltips:level_9', [
		/create:.*/,
		/createaddition:.*/,
		/ars_creo:.*/,
		/compressedcreativity:.*/,
		/railways:.*/,
		/createendertransmission:.*/
	]);

	e.remove('legendarytooltips:level_9', [
		/create:.*backtank/
	])
});
