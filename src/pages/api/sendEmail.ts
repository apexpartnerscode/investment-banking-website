import { EmailClient } from '@azure/communication-email'
import { NextRequest, NextResponse } from 'next/server'

export default async function sendEmail(request: NextRequest, response: any) {
  try {
    const connectionString =
      process.env.COMMUNICATION_SERVICES_CONNECTION_STRING
    const emailClient = new EmailClient(connectionString!)

    const body = request.body as any
    const { name, email, phone, message: bodyMessage } = body

    const message = {
      senderAddress: 'noreplay@apxinvest.com',
      content: {
        subject: 'Novo contato via site: ib.apexpartners.com.br',
        plainText: `Dados do contato:

        Nome: ${name}

        Email: ${email}

        Telefone: ${phone}

        Mensagem: ${bodyMessage}

        contato via site: ib.apexpartners.com.br
      `,
      },
      recipients: {
        to: [
          {
            address: 'ib@apexpartners.com.br',
            displayName: 'IB Apex Partners',
          },
        ],
      },
    }

    const poller = await emailClient.beginSend(message)
    const result = await poller.pollUntilDone()
    response.status(200).json({ result })
  } catch (error) {
    console.log('deu ruim: ', error)
    return NextResponse.json({ error })
  }
}
