export const Abilities: {[abilityid: string]: ModdedAbilityData} = {
	hoard: {
		shortDesc: "When it leaves battle, the Pokémon restores its original held item.",
		onSwitchOut(pokemon) {
			if (!pokemon.item && pokemon.m.originalItem) {
				if (pokemon.setItem(pokemon.m.originalItem)) {
					this.add('-ability', pokemon, 'Hoard');
					this.add('-item', pokemon, this.dex.getItem(pokemon.m.originalItem), '[from] Ability: Hoard');
				}
			}
		},
		name: "Hoard",
		rating: 3,
		num: -1,
	},
	chainlink: {
		shortDesc: "In a double battle, the Pokémon steals its partner's Steel type.",
		onUpdate(pokemon) {
			if (!pokemon.isStarted) return; // should activate *after* Data Mod
			if (!pokemon.hasType('Steel')) {
				for (const ally of pokemon.allies()) {
					if (ally.hasAbility('chainlink')) continue; // don't bounce back and forth indefinitely
					if (ally.hasType('Steel') && pokemon.addType('Steel')) {
						this.add('-ability', pokemon, 'Chain Link');
						this.add('-message', `${pokemon.name} stole its partner's armor!`);
						this.add('-start', pokemon, 'typeadd', 'Steel', '[from] Ability: Chain Link');
						ally.addVolatile('chainlink');
					}
				}
			}
		},
		onEnd(pokemon) {
			if (!pokemon.hasType('Steel')) return;
			// doesn't happen twice if the ally has already returned the armor
			for (const ally of pokemon.allies()) {
				ally.removeVolatile('chainlink');
			}
		},
		condition: {
			onStart(pokemon) {
				pokemon.setType(pokemon.getTypes(true).map(type => type === "Steel" ? "???" : type));
				this.add('-start', pokemon, 'typechange', pokemon.types.join('/'));
			},
			onSwitchOut(pokemon) { // it seems like volatiles may not run onEnd on their own the way Abilities do
				pokemon.removeVolatile('chainlink');
			},
			onFaint(pokemon) {
				pokemon.removeVolatile('chainlink');
			},
			onEnd(pokemon) {
				for (const ally of pokemon.allies()) { // revert Chain Link user's type first
					if (ally.hasAbility('chainlink') && ally.hasType('Steel')) {
						let types = ally.baseSpecies.types;
						if (ally.getTypes().join() === types.join() || !ally.setType(types)) return;
						this.add('-ability', ally, 'Chain Link');
						this.add('-message', `${ally.name} returned its partner's armor!`);
						this.add('-start', ally, 'typechange', ally.types.join('/'));
						types = pokemon.baseSpecies.types;
						if (pokemon.getTypes().join() === types.join() || !pokemon.setType(types)) return;
						this.add('-start', pokemon, 'typechange', pokemon.types.join('/'));
					}
				}
			},
		},
		name: "Chain Link",
		rating: 3,
		num: -2,
	},
	lavaflow: {
		shortDesc: "The Pokémon draws Fire moves to itself to raise Speed by 1; Fire immunity.",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				if (!this.boost({spe: 1})) {
					this.add('-immune', target, '[from] ability: Lava Flow');
				}
				return null;
			}
		},
		onAnyRedirectTarget(target, source, source2, move) {
			if (move.type !== 'Fire' || ['firepledge', 'grasspledge', 'waterpledge'].includes(move.id)) return;
			const redirectTarget = ['randomNormal', 'adjacentFoe'].includes(move.target) ? 'normal' : move.target;
			if (this.validTarget(this.effectData.target, source, redirectTarget)) {
				if (move.smartTarget) move.smartTarget = false;
				return this.effectData.target;
			}
		},
		name: "Lava Flow",
		rating: 3,
		num: -3,
	},
	centrifuge: {
		shortDesc: "The Pokémon draws Ground moves to itself to raise Attack by 1; Ground immunity.",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Ground') {
				if (!this.boost({atk: 1})) {
					this.add('-immune', target, '[from] ability: Centrifuge');
				}
				return null;
			}
		},
		onAnyRedirectTarget(target, source, source2, move) {
			if (move.type !== 'Ground' || ['firepledge', 'grasspledge', 'waterpledge'].includes(move.id)) return;
			const redirectTarget = ['randomNormal', 'adjacentFoe'].includes(move.target) ? 'normal' : move.target;
			if (this.validTarget(this.effectData.target, source, redirectTarget)) {
				if (move.smartTarget) move.smartTarget = false;
				return this.effectData.target;
			}
		},
		name: "Centrifuge",
		rating: 3,
		num: -4,
	},
};
