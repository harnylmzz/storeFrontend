import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CategoryService from "../services/categoryService";
import {
    CardMeta,
    CardHeader,
    CardGroup,
    CardDescription,
    CardContent,
    Button,
    Card,
    Image,
  } from 'semantic-ui-react'
  

export default function CategoryDetail() {
  let { id } = useParams();
  
  return (
    <div>
      <CardGroup>
        <Card>
          <CardContent>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/steve.jpg"
            />
            <CardHeader>Ürün adı</CardHeader>
            <CardMeta>Satıcı</CardMeta>
            <CardDescription>
              Ürün tanımı
            </CardDescription>
          </CardContent>
          <CardContent extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Sepete ekle
              </Button>
              <Button basic color="red">
                Favorilere ekle
              </Button>
            </div>
          </CardContent>
        </Card>
      </CardGroup>
    </div>
  );
}
