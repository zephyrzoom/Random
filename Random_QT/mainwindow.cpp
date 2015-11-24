#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QDebug>

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::on_pushButton_2_clicked()
{
    QString number = ui->lineEdit->text();
    int total = number.toInt();
    int rand = (qrand() % total) + 1;
    QString qrand = QString::number(rand);
    qDebug() << qrand;
    ui->label_2->setText(qrand);
}
