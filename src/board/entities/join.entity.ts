import { PrimaryColumn, ManyToOne, Entity } from 'typeorm';
import { Board } from './board.entity';

@Entity({ schema: 'public', name: 'join' })
export class Join {
  @PrimaryColumn()
  boardId: number;

  @PrimaryColumn()
  userId: number;

  @ManyToOne((type) => Board, (board) => board.joins)
  board: Board;
}
