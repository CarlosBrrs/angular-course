//En Angular no se tiene un decorador para servicios. Es una clase plana
//Para crear servicios se puede usar el comando: ng g s <nombreServicio>
export class CoursesService {
    getCourses() {
        return ["Math","Science","Geography"];
    }    
}