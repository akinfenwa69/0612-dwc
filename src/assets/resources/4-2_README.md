# README..md

## Exercici 5. Explica en què consisteix la desestructuració d’objectes. Posa exemples.

La desestructuració d'objectes és l'assignació de diversos valors dins d'una variable, per exemple:

```
const foo = ["one", "two", "three"];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
```

O també es pot fer d'aquesta altra manera:

```
const user = {
  name: "Manz",
  role: "streamer",
  life: 99
}

const { name, role, life } = user;

console.log(name); // "Manz"
console.log(role); // "streamer"
console.log(lite); // 99
```

Per finalitzar, està la desestructuració amb _rest_, que es realitza d'aquesta manera:

```
const user = {
  name: "Manz",
  role: "streamer",
  life: 99
}

const { name, ...rest } = user;

```

Això ens permet agafar una variable en específic (`name`) i la resta de varaiables (`...rest`)