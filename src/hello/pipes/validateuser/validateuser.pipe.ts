import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateuserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(JSON.stringify(value, null, 2));

    value.ageNumber = parseInt(value.age.toString(), 10)
    if (isNaN(value.ageNumber)) {
      throw new HttpException('La edad debe ser un número', HttpStatus.BAD_REQUEST);
    }
    return {...value, age: value.ageNumber};
  }
}
