import { DynamicModule, Provider } from '@nestjs/common';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { TYPEORM_EX_CUSTOM_REPOSITORY } from './typeorm-ex.decorator';

export class TypeOrmExModule {
  public static forCustomRepository<T extends new (...args: any[]) => any>(
    //new는 결국 클래스 데코레이터의 유형 클래스를 제한하기 위해 extends다음에 지정합니다.
    repositories: T[],
  ): DynamicModule {
    const providers: Provider[] = [];

    for (const repository of repositories) {
      const entity = Reflect.getMetadata(
        TYPEORM_EX_CUSTOM_REPOSITORY,
        repository,
      );

      if (!entity) {
        continue;
      }

      providers.push({
        inject: [getDataSourceToken()],
        provide: repository,
        useFactory: (dataSource: DataSource): typeof repository => {
          const baseRepository = dataSource.getRepository<any>(entity);
          return new repository(
            baseRepository.target,
            baseRepository.manager,
            baseRepository.queryRunner,
          );
        },
      });
    }

    return {
      exports: providers,
      module: TypeOrmExModule,
      providers,
    };
  }
}

/*
위 코드는 NestJS 애플리케이션에서 TypeORM 라이브러리를 사용할 때, 
커스텀 리포지토리 클래스를 제공하는 모듈을 만들기 위한 코드입니다.

TypeOrmExModule 클래스
forCustomRepository() 메서드: 커스텀 리포지토리 클래스를 모듈에 등록하기 위한 메서드입니다. T 제네릭 타입은, 생성자 함수를 제한하기 위해 클래스 데코레이터의 타입을 지정합니다.
repositories 매개변수: 커스텀 리포지토리 클래스들의 배열입니다.
providers 배열: 모듈에서 제공하는 프로바이더(컴포넌트)들의 배열입니다.
for...of 문: repositories 배열의 각각의 요소에 대해 아래의 작업을 반복합니다.
entity 변수: repository 클래스에서 @CustomRepository() 데코레이터를 사용하여 지정한 엔티티 정보를 가져옵니다.
if 문: @CustomRepository() 데코레이터가 지정되지 않았으면, 다음 요소로 넘어갑니다.
providers.push() 메서드: 프로바이더를 배열에 추가합니다.
inject 배열: 의존성 주입을 위해 필요한 프로바이더의 토큰을 정의합니다. 여기서는 데이터베이스 연결 정보를 주입하기 위해 getDataSourceToken() 토큰을 사용합니다.
provide 변수: 프로바이더의 토큰입니다. 여기서는 repository 클래스의 타입을 사용합니다.
useFactory 함수: 프로바이더를 생성하는 팩토리 함수입니다. 데이터베이스 연결 정보를 받아 entity와 연결된 기본 리포지토리를 가져와서, repository 클래스의 인스턴스를 생성합니다. 생성한 인스턴스를 반환합니다.
exports 프로퍼티: 모듈이 외부에 제공하는 프로바이더(컴포넌트)들의 배열입니다.
module 프로퍼티: 모듈 자신을 가리키는 프로퍼티입니다.
providers 프로퍼티: 모듈에서 제공하는 프로바이더(컴포넌트)들의 배열입니다.
*/
