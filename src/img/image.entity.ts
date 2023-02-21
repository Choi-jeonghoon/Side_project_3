import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TEST_NEST')
export class ImageEntity {
  @Column()
  @PrimaryGeneratedColumn()
  idxno: number;

  @Column()
  hkey: string;

  @Column()
  kwamok: string;

  @Column()
  setNo: string;

  @Column()
  yymmwk: string;

  @Column()
  page: string;

  @Column()
  pageType: string;

  @Column()
  originalName: string;

  @Column()
  contents: string;

  @Column()
  photoYMD: string;

  @Column({ nullable: true })
  photoDay!: string;

  @Column({ nullable: true })
  sendYMD!: string;

  @Column()
  sendDay: string;

  @Column()
  sendFlag: string;

  @Column()
  feedbackFlag: string;

  @Column({ nullable: true })
  sendKey!: string;

  @Column({ nullable: true })
  feedbackSkey!: string;
}
