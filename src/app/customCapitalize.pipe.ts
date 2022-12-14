import { Pipe, PipeTransform } from "@angular/core";

//Debe implementar la interfaz PipeTransform y usar el decorador Pipe
@Pipe({
    name: 'customCapitalize'
})
export class CustomCapitalizePipe implements PipeTransform {

    transform(value: string) {
        if(!value) return null;

        let words = value.split(' ');
        for (let i = 0; i < words.length; i++) {
            if(i > 0 && this.isPreposition(words[i])) {
                words[i] = words[i].toLowerCase();
            } else {
                words[i] = this.toTitleCase(words[i]);
            }
        }
        return words.join(' ');
    }

    private toTitleCase(word: string): string {
        return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
    }

    private isPreposition(word: string): boolean {
        let prepositions = ['of', 'the'];
        return prepositions.includes(word.toLowerCase());
    }
}