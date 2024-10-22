import { Injectable } from '@nestjs/common';
import { Less1, less1s } from './Less1Db';

@Injectable()
export class Less1Service {
  getLess1s(): Less1[] {
    return less1s;
  }

  getLess1ById(id: number): Less1 {
    return less1s.find((item) => item.id === id);
  }

  createLess1(less1: Less1): { message: string; data: Less1 } {
    const newID = less1s[less1s.length - 1].id + 1;
    less1.id = newID;
    less1s.push(less1);
    return { message: 'Less1 created', data: less1 };
  }

  updateLess1(id: number, less1: Less1): { message: string; data: Less1 } {
    const currentLess1 = less1s.find((item) => item.id === id);
    const updatedLess1 = { ...currentLess1, ...less1 };

    const index = less1s.findIndex((item) => item.id === id);
    if (index !== -1) {
      less1s[index] = updatedLess1;
    }

    return { message: 'Less1 updated', data: updatedLess1 };
  }

  deleteLess1(id: number): { message: string } {
    const index = less1s.findIndex((item) => item.id === id);
    if (index !== -1) {
      less1s.splice(index, 1);
    }

    return { message: 'Less1 deleted' };
  }
}
