/*
This entity gives damage (through ig.Entity's receiveDamage() method) to
the entity that is passed as the first argument to the triggeredBy() method.

I.e. you can connect an EntityTrigger to an EntityHurt to give damage to the
entity that activated the trigger.


Keys for Weltmeister:

damage
	Damage to give to the entity that triggered this entity.
	Default: 10
*/

ig.module(
	'game.entities.hurt'
)
.requires(
	'impact.entity'
)
.defines(function(){
	
EntityHurt = ig.Entity.extend({
	_wmDrawBox: true,
	_wmScalable: true,	
	_wmBoxColor: 'rgba(255, 0, 0, 0.7)',
	
	size: {x: 16, y: 8},
	damage: 10,

    type: ig.Entity.TYPE.B,
    checkAgainst: ig.Entity.TYPE.A,
    collides: ig.Entity.COLLIDES.PASSIVE,

		
	triggeredBy: function( entity, trigger ) {	
		entity.receiveDamage(this.damage, this);
	},
	check: function( other ) {
        	other.receiveDamage( 10, this );
    },

	update: function(){}
});

});