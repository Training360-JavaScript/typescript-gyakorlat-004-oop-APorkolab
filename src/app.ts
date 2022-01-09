// Importáld be a HumanHero és TransformerHero osztályokat.
import { TransformerHero } from './transformer';
import { HumanHero } from './hero';
/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */

let erno = new HumanHero(1, "Ernő","male",44,100,"aNicePhoto");
let dezso = new HumanHero(2, "Dezső","male",55,300,"aNicePhoto");
let izolda = new HumanHero(3, "Izolda","female",30,500,"aNicePhoto");

export const humans: HumanHero[] = [erno,dezso,izolda];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
let napiDroid = new TransformerHero(1,"Napi Droid fővezér",1,5,"Túlhangos Klán","notAvaible");
let optimus = new TransformerHero(2,"Optimus",3,4,"Nem ismerem a sorozatot Klán","notAvaible");
let feketeADemon = new TransformerHero(3,"Fekete, a démon",10,4,"UL Clan","notAvaible");
export const transformers: TransformerHero[] = [napiDroid,optimus,feketeADemon];
