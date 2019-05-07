export interface Question
{
	category : string;
	type: string;
	difficulty : string;
  question : string;
  correct_answer : string;
  incorrect_answers : string[];
}

export interface Questions
{
	response_code : number;
	results : Question[];
}

export let qs : Questions =
{'response_code':0,'results':[{'category':'History','type':'multiple','difficulty':'medium','question':'Which of the following ancient Near Eastern peoples still exists as a modern ethnic group?','correct_answer':'Assyrians','incorrect_answers':['Babylonians','Hittites','Elamites']},{'category':'Mythology','type':'multiple','difficulty':'easy','question':'This Greek goddess\'s name was chosen for the dwarf planet responsible for discord on Pluto\'s classification amongst astronomers.','correct_answer':'Eris','incorrect_answers':['Charon','Ceres','Dysnomia']},{'category':'Art','type':'multiple','difficulty':'hard','question':'What year did Albrecht Dürer create the painting "The Young Hare"?','correct_answer':'1502','incorrect_answers':['1702','1402','1602']},{'category':'General Knowledge','type':'multiple','difficulty':'hard','question':'The Swedish word "Grunka" means what in English?','correct_answer':'Thing','incorrect_answers':['People','Place','Pineapple']},{'category':'Science & Nature','type':'multiple','difficulty':'hard','question':'Which of these is a stop codon in DNA?','correct_answer':'TAA','incorrect_answers':['ACT','ACA','GTA']},{'category':'Entertainment: Video Games','type':'multiple','difficulty':'medium','question':'What was the name of the protagonist of Metal Gear Solid V: The Phantom Pain?','correct_answer':'Punished "Venom" Snake','incorrect_answers':['Miller','Solid Snake','Ocelot']},{'category':'Entertainment: Music','type':'multiple','difficulty':'medium','question':'Which of these bands was a featuring artist in Compton rapper Kendrick Lamar\'s 2017 album, "DAMN."?','correct_answer':'U2','incorrect_answers':['Radiohead','Coldplay','Bon Jovi']},{'category':'Entertainment: Music','type':'multiple','difficulty':'medium','question':'Where did the British Boy Band "Bros" come from?','correct_answer':'Camberley','incorrect_answers':['Guildford','Aldershot','Bagshot']},{'category':'Entertainment: Video Games','type':'multiple','difficulty':'hard','question':'What was the name of Sonic the Hedgehog\'s original human girlfriend?','correct_answer':'Madonna','incorrect_answers':['Celeste','Sierra','Nina']},{'category':'Entertainment: Video Games','type':'multiple','difficulty':'hard','question':'In which game did the character "Mario" make his first appearance?','correct_answer':'Donkey Kong','incorrect_answers':['Super Mario Bros.','Super Mario Land','Mario Bros.']}]};