import { User } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  date: string;

  @Column()
  completed: boolean;

  //   many todos can belong to single user
  @ManyToOne(() => User, (user) => user.todos)
          //( ()=>{WithWhomTheRelationIs}, {ReverseRelation})
          //( And foriegn key is on {MANY side})

  user: User;
}
