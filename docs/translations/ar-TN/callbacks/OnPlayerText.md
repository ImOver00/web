---
El 3onwan: OnPlayerText
El wasf: Testa3mel el callback wa9talli player yeb3ath message fi chat
tags: ["player"]
---

## Description

Testa3mel el callback wa9talli player yeb3ath message fi chat

## Arguments

| Esm el argument     | El wasf                                  |
| ------------------- | ---------------------------------------- |
| playerid | El ID mt3 el player eli b3ath message fi chat       |
| text[]   | E text eli ba3thou el player                        |

## Returns

El callback hadha rahou executed fel filterscripts essa3k w ki ta3mel ``return 0`` mahouch bach yet3adda lel filterscripts

## Mithal

```c
public OnPlayerText(playerid, text[])
{
    new pText[144];
    format(pText, sizeof (pText), "(%d) %s", playerid, text);
    SendPlayerMessageToAll(playerid, pText);
    return 0; // Bach teb3ath el custom message mouch el default one
}
```

## Notes

<TipNPCCallbacks />

## Functions tab3inha

- [SendPlayerMessageToPlayer](../functions/SendPlayerMessageToPlayer): tforci player bach yeb3ath message le player
- [SendPlayerMessageToAll](../functions/SendPlayerMessageToAll): tforci player bach yeb3ath message lel players el
kol
