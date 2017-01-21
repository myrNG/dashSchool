<!-- Si on récupère une promo ET SI on click sur le bouton Détails,
 on récuère l'ID de l'élève afin d'avoir accès aux détails.
 Cette vue est masquée par défaut
 -->
<div class="listing-box-plus" *ngIf="activeId">
  <div class="student-card">
    <div class="reduce-button">
      <!-- Pour réduire la fenêtre, on rebascule à létat par défault -->
      <button (click)="seeMore('default')">Reduire</button>
    </div>
    <div *ngFor="let student of students">
      <!-- Si l'ID correspond/existe , on affiche les détails -->
      <div class="view" *ngIf="student.id == activeId">
        <div class="infos">
          <h3>{{student.name}}</h3>
          <p>Username : {{student.username}}</p>
          <p>Email: {{student.email}}</p>
          <p>Tél: {{student.phone}}</p>
        </div>
        <div class="address">
          <h3>Coordonnées</h3>
          <p>
            Address : <br>
            {{student.address.street}}<br>
            {{student.address.suite}}<br>
            {{student.address.city}}<br>
            {{student.address.zipcode}}<br>
          </p>
          <p>{{student.website}}</p>
        </div>
      </div>
    </div>
  </div>
</div>


<!-- Si on récumère une liste d'élève  -->
<div class="listing-box" *ngIf="students">
  <div class="students-finder">
    <input type="text" placeholder="Rechercher">
  </div>
  <table>
    <thead>
    <tr>
      <th>Id</th>
      <th>Nom</th>
      <th>Username</th>
      <th>Email</th>
      <th></th>
    </tr>
    </thead>
    <tbody>
    <tr *ngFor="let student of students" [@flyInOut]="student.state">
      <td>{{student.id}}</td>
      <td>{{student.name}}</td>
      <td>{{student.username}}</td>
      <td>{{student.email}}</td>
      <td>
        <button (click)="seeMore(student.id)"> détails </button>
        <button (click)="deleteStudent()">Suppr</button>
      </td>
    </tr>
    </tbody>
  </table>


<!-- Si promo inexistante -->
<div *ngIf="!students">
  <p>Pas de promo actuellement</p>
</div>

