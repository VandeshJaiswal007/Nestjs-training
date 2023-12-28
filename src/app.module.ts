import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceModule } from './invoice/invoice.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [InvoiceModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
