---
El 3owan: GetPlayerArmour
El wasf: Testa3mel el function hadhi to store player armour fi variable (ettale3 9adah 3andou armour el player)
tags: ["player"]
---

## Wasf

Testa3mel el function hadhi to store player armour fi variable (ettale3 9adah 3andou armour el player)

## Arguments

| Esm el argument          | El wasf                                               	      |
| -------------------------| --------------------------------------------------------- ---|
| playerid      		   | El ID mta3 el player eli t7eb ettale3 el armour mta3ou    	  |
| &Float:armour 		   | El Float: variable eli bach t7ot fih el armor mta3 el player |

## Returns

1 - success

0 - failure (player mahouch fel server).

El armour mta3 el player is stored fel variable eli esta3mltou (&Float:armour)

## Mithal

```c
new
	Float:armour,
	string[40];
// n7ottou player armour fel variable "armour"
GetPlayerArmour(playerid, armour);
format(string, sizeof string, "SERVER: El armour mta3ek %0.f bel 100%", armour);
// neb3thou el message lel player
SendClientMessage(playerid, 0xFFFFFFAA, string);
```

## Notes

:::warning

7ata ken tnajm tsetti health mta3 player le aye number, el player mnajemch yebda 3andou akther min 255 health
Ken tsetti health akther min 255, tarja3 le 0. 256 twali 0, 257 twali 1, ou kedha..

:::

## Related Functions

- [SetPlayerArmour](SetPlayerArmour): Set the armour of a player.
- [GetPlayerHealth](GetPlayerHealth): Find out how much health a player has.
- [GetVehicleHealth](GetVehicleHealth): Check the health of a vehicle.
